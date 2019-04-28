import React, { FC, useMemo } from "react";
import { render, wait } from "react-testing-library";
import { usePromise } from "lib/useDataApi";

const TestComponent: FC<{ promise: Promise<any> }> = ({ promise }) => {
  const { isLoading, data, error } = usePromise(
    useMemo(() => promise, [promise]),
    ""
  );

  if (isLoading) {
    return "Loading";
  } else if (error) {
    return error;
  }

  return data;
};

it("should report loading", () => {
  const promise = new Promise(() => {
    return;
  });
  const { container } = render(<TestComponent promise={promise} />);

  expect(container.textContent).toBe("Loading");
});

it("should report error", async () => {
  const promise = Promise.reject("Error");

  const component = <TestComponent promise={promise} />;
  const { container, rerender } = render(component);

  rerender(component);

  await wait(() => {
    expect(container.textContent).toBe("Error");
  });
});

it("should return value", async () => {
  const promise = Promise.resolve("Result");

  const component = <TestComponent promise={promise} />;
  const { container, rerender } = render(component);

  rerender(component);

  await wait(() => {
    expect(container.textContent).toBe("Result");
  });
});

it("should clear previous error", async () => {
  const failedPromise = Promise.reject("Error");

  const failedComponent = <TestComponent promise={failedPromise} />;
  const { container, rerender } = render(failedComponent);

  rerender(failedComponent);

  await wait(() => {
    expect(container.textContent).toBe("Error");
  });

  const successPromise = Promise.resolve("Result");

  rerender(<TestComponent promise={successPromise} />);

  await wait(() => {
    expect(container.textContent).toBe("Result");
  });
});

it("should succeed gracefully on unmount", async () => {
  const promise = Promise.resolve("Result");

  const component = <TestComponent promise={promise} />;
  const { unmount } = render(component);

  unmount();
});

it("should fail gracefully on unmount", async () => {
  const promise = Promise.reject("Error");

  const component = <TestComponent promise={promise} />;
  const { unmount } = render(component);

  unmount();
});

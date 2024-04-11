import Counter from "./Counter";

describe("Counter", () => {
  it("should render", () => {
    const { getByText } = render(<Counter />);
    expect(getByText("Count: 0")).toBeInTheDocument();
  });

  it("should increment count", () => {
    const { getByText } = render(<Counter />);
    fireEvent.click(getByText("Increment"));
    expect(getByText("Count: 1")).toBeInTheDocument();
  });
});


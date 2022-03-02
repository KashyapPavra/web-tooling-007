import { render, screen } from "@testing-library/react";
import App from "./App";

test("check for dinner today text", () => {
	render(<App />);
	const linkElement = screen.getByText(/dinner today/i);
	expect(linkElement).toBeInTheDocument();
});

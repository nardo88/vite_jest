// Imports
import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import App from "./App";

test("Renders main page correctly", async () => {
  render(<App />);
  const buttonCount = await screen.findByRole("button");
  // с помощью регулярки ищем компонент
  const codeCount = await screen.queryByText(/The count is now:/);

  expect(buttonCount.innerHTML).toBe("count is: 0");
  // Проверяем что компонента нет в DOM
  expect(codeCount).not.toBeInTheDocument();

  user.click(buttonCount);
  user.click(buttonCount);

  expect(buttonCount.innerHTML).toBe("count is: 2");
  // после кликов элемент должен появится в DOM
  expect(await screen.queryByText(/The count is now:/)).toBeInTheDocument();
});

import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import App from "./App";

test("Renders main page correctly", async () => {
  render(<App />);
  const buttonCount = await screen.findByRole("button");

  // проверяем что значение 0
  expect(buttonCount.innerHTML).toBe("count is: 0");

  // Делаем 2 щелчка
  user.click(buttonCount);
  user.click(buttonCount);
  screen.debug();
  // проверяем что текст кнопки изменился
  expect(buttonCount.innerHTML).toBe("count is: 2");
});

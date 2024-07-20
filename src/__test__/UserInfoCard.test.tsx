import { render, screen, fireEvent } from "@testing-library/react";
import UserInfoCard from "../components/UserInfoCard";
import { mockUserData } from "./mocks/mockUserData";

describe("UserInfoCard", () => {
  test("renders user data correctly", () => {
    render(<UserInfoCard userData={mockUserData} />);

    const imgElement = screen.getByRole("img");
    expect(imgElement).toBeInTheDocument();

    fireEvent.click(imgElement);

    const nameElement = screen.getByText(/john doe/i);
    const emailElement = screen.getByText(/john.doe@example.com/i);

    expect(nameElement).toBeInTheDocument();
    expect(emailElement).toBeInTheDocument();
  });

  test("renders without user data", () => {
    render(<UserInfoCard userData={null} />);

    const imgElement = screen.getByRole("img");
    expect(imgElement).toBeInTheDocument();

    fireEvent.click(imgElement);

    const nameElement = screen.queryByText(/john doe/i);
    const emailElement = screen.queryByText(/john.doe@example.com/i);

    expect(nameElement).not.toBeInTheDocument();
    expect(emailElement).not.toBeInTheDocument();
  });
});

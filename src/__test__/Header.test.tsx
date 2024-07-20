import { render, screen } from "@testing-library/react";
import { vi } from "vitest";
import { useFetchUserQuery } from "../api/tracktikAPI";
import { mockUserData } from "./mocks/mockUserData";
import Header from "@components/Header";
import UserInfoCard from "@components/UserInfoCard";

vi.mock("../api/tracktikAPI", () => ({
  useFetchUserQuery: vi.fn(),
}));
vi.mock("../UserInfoCard", () => require("../__mocks__/UserInfoCard"));
test("renders Header", () => {
  (useFetchUserQuery as jest.Mock).mockReturnValue({ data: mockUserData });
  render(<Header />);
  const titleElement = screen.getByText("Tracktick");
  expect(titleElement).toBeInTheDocument();
});

test("renders Header User info card with user data", () => {
  (useFetchUserQuery as jest.Mock).mockReturnValue({ data: mockUserData });
  render(<UserInfoCard userData={mockUserData} />);
});
test("renders Header User info card without user data", () => {
  (useFetchUserQuery as jest.Mock).mockReturnValue({ data: null });
  render(<UserInfoCard userData={null} />);
});



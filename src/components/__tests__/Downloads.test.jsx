import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Downloads from "../Downloads";
import { fetchDocuments, fetchDocumentsMeta } from "../../services/api";

window.URL.createObjectURL = window.URL.createObjectURL || jest.fn();

jest.mock("../../services/api", () => ({
  fetchDocuments: jest.fn(),
  fetchDocumentsMeta: jest.fn(),
}));

const mockDocuments = [
  {
    id: "doc-1",
    title: "Alpha Strategy",
    description: "Quarterly alpha generation insights",
    category: "Research",
    tags: ["alpha", "growth"],
    fileSize: 2048000,
    downloadCount: 8,
    createdAt: new Date("2025-01-05").toISOString(),
    updatedAt: new Date("2025-01-06").toISOString(),
    fileName: "alpha-strategy.pdf",
  },
];

describe("Downloads component", () => {
  beforeEach(() => {
    fetchDocumentsMeta.mockResolvedValue({
      data: { categories: ["Research"], tags: ["alpha", "growth"], total: 1 },
    });
    fetchDocuments.mockResolvedValue({
      data: {
        items: mockDocuments,
        total: 1,
        page: 1,
        pageSize: 9,
      },
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders fetched documents and core controls", async () => {
    render(
      <MemoryRouter>
        <Downloads />
      </MemoryRouter>
    );

    expect(await screen.findByText(/Alpha Strategy/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Find documents/i)).toBeInTheDocument();
    expect(fetchDocuments).toHaveBeenCalledWith({
      page: 1,
      pageSize: 9,
      sort: "-createdAt",
      q: undefined,
      category: undefined,
      tags: undefined,
    });
  });
});

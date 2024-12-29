import { render, screen } from '@testing-library/react'

import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import LandingPage from '../pages/home/LandingPage';
import FlightsPage from '../pages/flights/FlightsPage';

describe("AppRoutes", () => {
    it("renders the LandingPage for '/' route", () => {
        // Use createMemoryRouter for testing with a specific route
        const testRouter = createMemoryRouter(
            [
                { path: "/", element: <LandingPage /> },
            ],
            { initialEntries: ["/"] } // Start at '/'
        );

        render(<RouterProvider router={testRouter} />);

        // Replace with actual text from your LandingPage
        expect(screen.getByText(/design/i)).toBeInTheDocument();
    });

    it("renders the FlightsPage for '/flights' route", () => {
        const testRouter = createMemoryRouter(
            [
                { path: "/flights", element: <FlightsPage /> },
            ],
            { initialEntries: ["/flights"] } // Start at '/flights'
        );

        render(<RouterProvider router={testRouter} />);

        // Replace with actual text from your FlightsPage
        expect(screen.getByText(/Flights/i)).toBeInTheDocument();
    });

    // it("redirects to login if not authenticated for protected route '/flights'", () => {
    //     const testRouter = createMemoryRouter(
    //         [
    //             {
    //                 path: "/flights",
    //                 element: (
    //                     <div>Protected Content</div>
    //                 ), // Mock protected route
    //             },
    //             { path: "/login", element: <div>Login Page</div> }, // Mock login page
    //         ],
    //         { initialEntries: ["/flights"] } // Start at '/flights'
    //     );

    //     render(<RouterProvider router={testRouter} />);

    //     // Replace with actual text from your Login page
    //     expect(screen.getByText(/form/i)).toBeInTheDocument();
    // });
});

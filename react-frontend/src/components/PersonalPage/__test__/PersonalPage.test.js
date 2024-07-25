import React from "react";
import { render, screen } from "@testing-library/react";

import PersonalPage from "../PersonalPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders personal page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <PersonalPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("personal-datatable")).toBeInTheDocument();
    expect(screen.getByRole("personal-add-button")).toBeInTheDocument();
});

import React from "react";
import {HeaderStyle} from "src/styled";
import Tesla from "./logo";

export default function Header(): JSX.Element {
    return (
        <HeaderStyle>
            <Tesla/>
            <div>
                <div>Model S</div>
                <div>Model 3</div>
                <div>Model X</div>
                <div>Model Y</div>
                <div>Powerwall</div>
                <div>Recharge</div>
            </div>
            <div>
                <div>Assistance</div>
                <div>Shop</div>
                <div>Compte</div>
                <div>Menu</div>
            </div>
        </HeaderStyle>
    );
}

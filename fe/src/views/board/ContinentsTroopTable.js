import React, { Component } from "react";
import styled from "styled-components";
import _ from "lodash";
import { ARMIES_PER_CONTINENT } from "../../config/gameConstants";

class ContinentsTroopTable extends Component {
    render() {
        return (
            <Table>
                <thead>
                    <tr>
                        <th>Continent</th>
                        <th>+Troops</th>
                    </tr>
                </thead>
                {Object.keys(ARMIES_PER_CONTINENT).map((key, index) => {
                    return (
                        <tbody key={index}>
                            <tr>
                                <td>{_.startCase(_.toLower(key))}</td>
                                <td>{ARMIES_PER_CONTINENT[key]}</td>
                            </tr>
                        </tbody>
                    );
                })}
            </Table>
        );
    }
}

const Table = styled.table`
    font-family: Arial, Helvetica, sans-serif;
    border-collapse: collapse;
    width: 10%;
    margin-right: 10%;
    margin-left: 10%;
    font-size: 90%;
    td,
    th {
        border: 1px solid #ddd;
        padding: 4px;
        text-align: center;
        font-weight: bold;
    }

    th {
        padding-top: 12px;
        padding-bottom: 12px;
        background-color: #8964fe;
        color: white;
    }

    tr {
        background-color: #efefef;
        :hover {
            background-color: lightpink;
        }
    }
`;

export default ContinentsTroopTable;

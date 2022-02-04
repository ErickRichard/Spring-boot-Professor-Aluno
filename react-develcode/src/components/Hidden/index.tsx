import { Grid } from "@material-ui/core";
import React from "react";

type ColTamType = boolean | "auto" | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
type HiddenColProps = {
    show?: boolean;
    children: React.ReactNode;
    xs?: ColTamType;
    md?: ColTamType;
    sm?: ColTamType;
    style?: React.CSSProperties;
};
const Hidden: React.FC<HiddenColProps> = (props: HiddenColProps) => {
    return props.show ? (
        <Grid item xs={props.xs} md={props.md} sm={props.sm} style={props.style}>
            {props.children}
        </Grid>
    ) : null;
};
export default Hidden;
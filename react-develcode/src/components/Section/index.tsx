import React from "react";
import { Grid, Typography } from "@material-ui/core";

type Props = {
  title: string;
  className?: string;
  children?: React.ReactNode;
  hidden?: boolean;
};
const Section: React.FC<Props> = (props: Props) => {
	return props.hidden? null : (
		<Grid container alignItems="center" direction="row" style={{ marginBottom: "2rem" }} className="section">
			<Grid item xs={12}>
				<Typography
					style={{
						margin: "20px 5px 15px 0px",
						fontSize: 20,
						fontWeight: 800,
						fontFamily: "monospace"
					}}
				>
					{props.title}
				</Typography>
			</Grid>
			<Grid item  xs={12}>{props.children}</Grid>
		</Grid>
	);
};
export default Section;

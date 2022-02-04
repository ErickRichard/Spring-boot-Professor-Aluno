import { Container, Paper } from "@material-ui/core";
import React from 'react';

// import { Container } from './styles';

const ContainerFluid: React.FC = () => {
    return (
        <div className="cont">
            <Container style={{ margin: "20px auto", padding: "50px 20px", display: "flex", alignItems: "center", flexDirection: "column", width: "100%" }}>
                <Paper elevation={3} style={{ padding: "50px 20px", width: 600, margin: "20px auto" }}>
                    
                </Paper>
            </Container>
        </div>
    );
}

export default ContainerFluid;
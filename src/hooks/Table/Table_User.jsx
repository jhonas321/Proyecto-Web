// import * as React from "react";
import Box from "@mui/joy/Box";
import PropTypes from "prop-types";
import Table from "@mui/joy/Table";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";
import Button from "@mui/joy/Button";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";

export default function Table_User({ products }) {
  console.log(
    products.map((frente)=>(frente.NOMBRE_FRENTE))
  );
  return (
    <Box sx={{ width: "100%" }}>
      <Sheet
        variant="outlined"
        sx={{
          "--TableCell-height": "40px",
          // the number is the amount of the header rows.
          "--TableHeader-height": "calc(1 * var(--TableCell-height))",
          "--Table-firstColumnWidth": "30px",
          "--Table-lastColumnWidth": "px",
          // background needs to have transparency to show the scrolling shadows
          "--TableRow-stripeBackground": "rgba(0 0 0 / 0.04)",
          "--TableRow-hoverBackground": "rgba(0 0 0 / 0.08)",
          overflow: "auto",
          background: (theme) =>
            `linear-gradient(to right, ${theme.vars.palette.background.surface} 30%, rgba(255, 255, 255, 0)),
            linear-gradient(to right, rgba(255, 255, 255, 0), ${theme.vars.palette.background.surface} 70%) 0 100%,
            radial-gradient(
              farthest-side at 0 50%,
              rgba(0, 0, 0, 0.12),
              rgba(0, 0, 0, 0)
            ),
            radial-gradient(
                farthest-side at 100% 50%,
                rgba(0, 0, 0, 0.12),
                rgba(0, 0, 0, 0)
              )
              0 100%`,
          backgroundSize:
            "40px calc(100% - var(--TableCell-height)), 40px calc(100% - var(--TableCell-height)), 14px calc(100% - var(--TableCell-height)), 14px calc(100% - var(--TableCell-height))",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "local, local, scroll, scroll",
          backgroundPosition:
            "var(--Table-firstColumnWidth) var(--TableCell-height), calc(100% - var(--Table-lastColumnWidth)) var(--TableCell-height), var(--Table-firstColumnWidth) var(--TableCell-height), calc(100% - var(--Table-lastColumnWidth)) var(--TableCell-height)",
          backgroundColor: "background.surface",
        }}
      >
        <Table
          borderAxis="bothBetween"
          stripe="odd"
          hoverRow
          sx={{
            "& tr > *:first-of-type": {
              position: "sticky",
              left: 0,
              boxShadow: "1px 0 var(--TableCell-borderColor)",
              bgcolor: "background.surface",
            },
            "& tr > *:last-child": {
              position: "sticky",
              right: 0,
              bgcolor: "var(--TableCell-headBackground)",
            },
          }}
        >
          <thead>
            <tr>
              <th style={{ width: 30 }}>#</th>
              <th style={{ width: 200 }}>Nombre Convocatoria</th>
              <th style={{ width: 150 }}>Tipo Eleccion</th>
              <th style={{ width: 150 }}>Frentes</th>
              <th style={{ width: 150 }}>Candidatos</th>
              <th style={{ width: 150 }}>Facultad</th>
              <th style={{ width: 150 }}>Dia Eleccion</th>
              <th
                aria-label="last"
                style={{ width: 100, textAlign: "center" }} // Ajusta el ancho y el alineamiento
              ></th>
            </tr>
          </thead>
          <tbody>
            {products.map((frente) => {
                if(frente.relacion_elecc_frente.length !== 0){
                  frente.relacion_elecc_frente.map((eleccion)=>{
                    if(eleccion.eleccion.relacion_eleccconvo.length !== 0){
                      eleccion.eleccion.relacion_eleccconvo.map((convocatoria, index)=>{
                        if(convocatoria.ACTIVO.toUpperCase() !== "ACTIVO"){
                          return (
                          <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{convocatoria.NOMBRE_CONVOCATORIA}</td>
                            <td>{eleccion.TIPO_ELECCION}</td>
                            <td>{frente.NOMBRE_FRENTE}</td>
                            <td>{"Lista de candidatos"}</td>
                            <td>{convocatoria.relacion_fc.facultad.NOMBRE_FACULTAD}</td>
                            <td>{convocatoria.DIA_ELECCION.split(' ')[0]}</td>

                            <td style={{ alignContent: "center", alignItems: "center" }}>
                              <Box
                                sx={{
                                  display: "flex",
                                  gap: 1,
                                  alignItems: "center",
                                  alignContent: "center",
                                  justifyContent: "center",
                                }}
                              >
                                <Button size="sm" variant="plain" color="neutral">
                                  <EditIcon fontSize="inherit" /> {/* Ajusta el tamaño */}
                                </Button>
                                <Button size="sm" variant="soft" color="danger">
                                  <DeleteIcon fontSize="inherit" /> {/* Ajusta el tamaño */}
                                </Button>
                                <Button size="sm" variant="plain" color="primary">
                                  <VisibilityIcon fontSize="inherit" />{" "}
                                  {/* Ajusta el tamaño */}
                                </Button>
                              </Box>
                            </td>
                          </tr>);
                        }
                      })
                    }
                  })
                } 
              })
            }
          </tbody>
        </Table>
      </Sheet>
      <Typography level="body-sm" textAlign="center" sx={{ pb: 2 }}>
        ← - →
      </Typography>
    </Box>
  );
}
Table_User.propTypes = {
  products: PropTypes.array,
};

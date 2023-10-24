import { useState } from "react";
import PropTypes from "prop-types";
import {
  FormControl,
  TextField,
  CssBaseline,
  Box,
  Button,
  InputLabel,
  Select,
  MenuItem,
  Typography,
  IconButton, // Agregado
} from "@mui/material";
import { Label, Clear } from "@mui/icons-material"; // Agregado
import { postFrente } from "../../api/api";

const Form_Frente = ({ onClose, edit }) => {
  const [formData, setFormData] = useState({
    NOMBRE_FRENTE: "",
    LOGO_FRENTE:'',
    ACTIVO: "Activo",
  });

  const addCandidate = () => {
    const newCandidate = {
      name: "",
      cargo: "",
    };
    setFormData({
      ...formData,
      candidates: [...formData.candidates, newCandidate],
    });
  };

  const handleCandidateChange = (e, index) => {
    const { name, value } = e.target;
    const updatedCandidates = [...formData.candidates];
    updatedCandidates[index][name] = value;

    setFormData({
      ...formData,
      candidates: updatedCandidates,
    });
  };

  const removeCandidate = (index) => {
    const updatedCandidates = [...formData.candidates];
    updatedCandidates.splice(index, 1); // Elimina el candidato en la posición 'index'
    setFormData({
      ...formData,
      candidates: updatedCandidates,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formSend = {
        ...formData,
        LOGO_FRENTE:'logo_frente_ejemplo.jpg',
      }
      const value = JSON.stringify(formSend);
      console.log(value);
      postFrente('', value);
      onClose();
    } catch (error) {
      console.error("Error al enviar datos a la API:", error);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "89vh",
        justifyContent: "space-between",
      }}
    >
      <CssBaseline />
      <Box>
        <FormControl
          sx={{
            width: 320,
          }}
        >
          <TextField
            required
            label="Nombre Frente"
            variant="outlined"
            fullWidth
            name="name"
            value={formData.NOMBRE_FRENTE}
            onChange={(e) => setFormData({ ...formData, NOMBRE_FRENTE: e.target.value })}
            margin="dense"
          />
        </FormControl>
        <FormControl
          sx={{
            width: 320,
            marginTop: "10px",
          }}
        >
          <InputLabel htmlFor="estado">Estado</InputLabel>
          <Select
            required
            name="estado"
            value={formData.ACTIVO}
            onChange={(e) =>
              setFormData({ ...formData, ACTIVO: e.target.value })
            }
            label="Nombre"
          >
            <MenuItem value="Activo">Activo</MenuItem>
            <MenuItem value="Inactivo">Inactivo</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box>
        <Button
          onClick={handleSubmit}
          sx={{
            width: "100%",
            borderRadius: "55px",
            marginTop: "16px",
          }}
          variant="contained"
          color="primary"
        >
          Crear Frente
        </Button>
      </Box>
    </Box>
  );
};

Form_Frente.propTypes = {
  onClose: PropTypes.func.isRequired,
  edit: PropTypes.bool.isRequired,
};

export default Form_Frente;

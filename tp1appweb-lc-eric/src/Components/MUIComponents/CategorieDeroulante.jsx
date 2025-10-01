import {FormControl, Grid, InputLabel, MenuItem, Select} from "@mui/material";
import {categories} from "../../scripts/categorie.js";
import {useState} from "react";


export default function CategorieDeroulante(){
    const [categorie, setCategorie] = useState(categories[0]);
    return (
        <Grid item xs={12} sm={6}>
            <FormControl fullWidth variant="filled" required>
                <InputLabel>Catégorie de sport</InputLabel>
                <Select
                    value={categorie}
                    onChange={(e) => setCategorie(e.target.value)}
                    name="categorie"
                >
                    {categories.map(c =>
                        <MenuItem value={c}>{c}</MenuItem>
                    )}


                </Select>
            </FormControl>
        </Grid>
    )
}
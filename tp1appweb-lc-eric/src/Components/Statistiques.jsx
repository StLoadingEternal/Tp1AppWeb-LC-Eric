import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import List from '@mui/material/List';
import BarChartIcon from '@mui/icons-material/BarChart';
import appliquerFiltres from "../scripts/filtrerNouvelles.js";

export default function Statistiques({stat, critere, nouvelles}) {

    //Les différentes statistiques
    const longue = stat.plusLongueNouvelle();
    const courte = stat.plusCourteNouvelle();
    const moyenne = stat.tailleMoyenne().toFixed(1);//moyenne en termes de taille des nouvelles
    const recente = stat.plusRecenteNouvelle();
    const ancienne = stat.plusAncienneNouvelle()



    return (
        <Box
            sx={{
                width: "100%",
                padding: 2,
                backgroundColor: 'secondary.main',
                borderRadius: 3,
                boxShadow: 2,
                mt: 2,
                boxSizing: "border-box",
            }}
            className={"makeitglass"}
        >
            <Typography variant="h5" sx={{display: "flex", alignItems: "center", gap: 1, fontWeight: "bold", mb: 2}}>
                <BarChartIcon/>
                Statistiques
            </Typography>

            <Divider sx={{mb: 2}}/>

            <List dense>
                <ListItem>
                    <ListItemText
                        primary={
                            <>
                                <strong>Nombre total de nouvelles :</strong> {stat.nbNouvelles}
                            </>
                        }
                    />
                </ListItem>

                <ListItem>
                    <ListItemText
                        primary={
                            <>
                                <strong>Taille moyenne :</strong> {moyenne} caractères
                            </>
                        }
                    />
                </ListItem>


                <ListItem>
                    <ListItemText
                        primary={
                            <>
                                <strong>Plus longue :</strong> {longue?.titre} ({longue?.texte.trim().length} caractères)
                            </>
                        }
                    />
                </ListItem>


                <ListItem>
                    <ListItemText
                        primary={
                            <>
                                <strong>Plus courte :</strong> {courte?.titre} ({courte?.texte.trim().length} caractères)
                            </>
                        }
                    />
                </ListItem>


                <ListItem>
                    <ListItemText
                        primary={
                            <>
                                <strong>Plus récente :</strong> {recente?.titre} ({recente?.date})
                            </>
                        }
                    />
                </ListItem>


                <ListItem>
                    <ListItemText
                        primary={
                            <>
                                <strong>Plus ancienne :</strong> {ancienne?.titre} ({ancienne?.date})
                            </>
                        }
                    />
                </ListItem>
                {/*on affiche le nombre de nouvelles par critère appliqué (seulement quand un critère est appliqué)*/}
                {critere &&
                    <ListItem>
                        <ListItemText
                            primary={
                                <>
                                    <strong>Nombres de nouvelles par critères:</strong> {appliquerFiltres(nouvelles, critere).length}
                                </>
                            }
                        />
                    </ListItem>
                }
            </List>
        </Box>
    );
}
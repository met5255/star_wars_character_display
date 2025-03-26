import { Box, Button, Typography, Dialog, DialogContent, DialogActions, Divider, Paper, Stack } from '@mui/material';
import { useCharacterContext } from '../../contexts/CharacterContext';

const ModalPanel = () => {
  const { selectedCharacter, planet, closeCharacterModal } = useCharacterContext();

  return (
    <Dialog
      fullWidth
      maxWidth="sm"
      open={!!selectedCharacter}
      onClose={closeCharacterModal}
    >
      {selectedCharacter && (
        <>
          <Box sx={{ bgcolor: 'primary.main', color: 'white', p: 1 }}>
            <Typography variant="h4" align="center" fontWeight="bold">
              {selectedCharacter.name}
            </Typography>
          </Box>
          <DialogContent>
            <Stack spacing={2} mt={1}>
              <Paper elevation={2} sx={{ p: 2 }}>
                <Typography variant="body1"><strong>Magasság:</strong> {selectedCharacter.height} cm</Typography>
                <Typography variant="body1"><strong>Súly:</strong> {selectedCharacter.mass} kg</Typography>
                <Typography variant="body1"><strong>Születési dátum:</strong> {selectedCharacter.birth_year}</Typography>
                <Typography variant="body1"><strong>Filmek száma:</strong> {selectedCharacter.films.length}</Typography>
              </Paper>

              {planet && (
                <Paper elevation={3} sx={{ mt: 2, p: 2, bgcolor: 'grey.100' }}>
                  <Typography variant="subtitle1" fontWeight="bold" gutterBottom>Szülőföld:</Typography>
                  <Divider />
                  <Typography variant="body2" mt={1}>Név: {planet.name}</Typography>
                  <Typography variant="body2">Terep: {planet.terrain}</Typography>
                  <Typography variant="body2">Klíma: {planet.climate}</Typography>
                </Paper>
              )}
            </Stack>
          </DialogContent>
          <DialogActions sx={{ p: 2 }}>
            <Button variant="contained" color="primary" onClick={closeCharacterModal}>Bezárás</Button>
          </DialogActions>
        </>
      )}
    </Dialog>
  );
};

export default ModalPanel;
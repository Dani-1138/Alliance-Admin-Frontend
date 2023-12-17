import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

// eslint-disable-next-line react/prop-types
export function PrimaryButton({ children, marginTop, marginRight, onClick }) {
  return (
    <Stack spacing={2} direction="row" float={'right'}>
      <Button
        variant="contained"
        style={{
          marginLeft: marginTop,
          position: 'absolute',
          right: '10px',
          marginRight: marginRight,
        }}
        onClick={onClick}
      >
        {children}
      </Button>
    </Stack>
  );
}

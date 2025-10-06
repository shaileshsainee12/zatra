
import { Card, CardMedia, CardContent, CardActions, Typography, Button, Stack } from "@mui/material"

export default function PackageCard({ title, period, organizer, image }) {
  return (
    <div className="h-full shadow-card bg-red p-4 rounded-lg">
      <CardMedia component="img" height="180" image={image} alt={title} />
      <CardContent>
        <Typography variant="subtitle1" sx={{ fontWeight: "bold", fontSize: {sm: "18px", lg:"24px"} }}>
          {title}
        </Typography>
        <Stack spacing={0.5} className="mt-2 text-sm">
          <Typography variant="body2">Time Period: {period}</Typography>
          <Typography variant="body2">Organized By: {organizer}</Typography>
        </Stack>
      </CardContent>
      <CardActions className="px-4 pb-4">
        <Button size="small" variant="outlined" color="primary">
          Know More
        </Button>
        <Button size="small" variant="contained" color="primary">
          Book ZATRA
        </Button>
      </CardActions>
    </div>
  )
}

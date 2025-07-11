import { Typography } from "@mui/material"
import { Container } from "@mui/system"

const About = () => {
  return (
    <Container maxWidth='md' sx={{
      bgcolor: 'background.paper',
      boxShadow: 2,
      my: 10,
      py: 10
    }}>
      <Typography variant="h4" align="center" gutterBottom>
        Honey Patel
      </Typography>

      <Typography variant="h5" gutterBottom>
        Key Features
      </Typography>

      <ul style={{ marginLeft: '40px' }}>
        <li>Create user groups and track group expenses</li>
        <li>Track shared expenses and settle balances easily</li>
        <li>Visual analytics: Monthly spend, category-wise graphs</li>
        <li>User registration with JWT authentication</li>
        <li>Fully responsive MERN stack application</li>
      </ul>
    </Container>
  )
}

export default About;

// src/pages/ProjectsRB.tsx

import { Container, Card, ListGroup } from 'react-bootstrap'

export default function AboutRB() {
  return (
    <Container className="py-5" style={{ maxWidth: 600 }}>
      <h1 className="h3 fw-bold mb-4">Acerca de este proyecto</h1>
      <Card className="shadow-sm">
        <Card.Header className="fw-semibold">Full Stack</Card.Header>
        <ListGroup variant="flush">
          <ListGroup.Item>Despliegues AWS, GoogleCLoud, Azure</ListGroup.Item>
          <ListGroup.Item>ERP Contable</ListGroup.Item>
          <ListGroup.Item>POint Cloud Viewer</ListGroup.Item>
          <ListGroup.Item>Control de Eventos</ListGroup.Item>
        </ListGroup>
      </Card>
    </Container>
  )
}
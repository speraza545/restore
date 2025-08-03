import { Alert, AlertTitle, Button, ButtonGroup, Container, List, ListItem, Typography } from "@mui/material";
import { useLazyGet400ErrorQuery, useLazyGet401ErrorQuery, useLazyGet404ErrorQuery, useLazyGet500ErrorQuery, useLazyGetValidationErrorQuery } from "./errorApi";
import { useState } from "react";

export default function AboutPage() {
  const [validationErrors, setValidationErrors] = useState<string[]>([]);

  const [trigger400error] = useLazyGet400ErrorQuery();
  const [trigger401error] = useLazyGet401ErrorQuery();
  const [trigger404error] = useLazyGet404ErrorQuery();
  const [trigger500error] = useLazyGet500ErrorQuery();
  const [triggerValidationError] = useLazyGetValidationErrorQuery();

  const getValidationError = async () => {
    try {
      await triggerValidationError().unwrap();
    } catch (error: unknown) {
      if (error && typeof error === 'object' && 'message' in error 
          && typeof (error as {message: unknown}).message === 'string') {
        const errorArray = (error as {message: string}).message.split(', ');
        setValidationErrors(errorArray)
      }

    }
  }

  return (
    <Container maxWidth="lg">
      <Typography gutterBottom variant='h3'>
        Errors for testing
      </Typography>
      <ButtonGroup fullWidth>
        <Button variant="contained" onClick={() => trigger400error().catch(err => console.log(err))}>
          test 400 error
        </Button>
        <Button variant="contained" onClick={() => trigger401error().catch(err => console.log(err))}>
          test 401 error
        </Button>
        <Button variant="contained" onClick={() => trigger404error().catch(err => console.log(err))}>
          test 404 error
        </Button>
        <Button variant="contained" onClick={() => trigger500error().catch(err => console.log(err))}>
          test 500 error
        </Button>
        <Button variant="contained" onClick={getValidationError}>
          test validation error
        </Button>
      </ButtonGroup>
      {validationErrors.length > 0 && (
        <Alert severity="error">
          <AlertTitle>Validation errors</AlertTitle>
          <List>
            {validationErrors.map(err => (
              <ListItem key={err}>{err}</ListItem>
            ))}
          </List>
        </Alert>
      )}
    </Container>
  )
}
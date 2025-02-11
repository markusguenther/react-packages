import React from 'react';
import { Formik, FormikProps, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';
import { space, color } from 'styled-system';

import { ThemeProps } from '@t3n/theme';
import {
  Text,
  Card,
  CardSplitContent,
  Heading,
  Grid,
  GridItem,
  Button,
  H5
} from '@t3n/components';

import { FormInput } from '../../../components/FormField';
import { storyContainerDecorator } from '../../../utils/decorators';

export default {
  title: 'Components|Form/Formulare',
  decorators: [storyContainerDecorator],
  parameters: { docs: { page: null } }
};

interface RegisterValues {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  passwordComfirm: string;
}

const DebugValues = styled.pre<ThemeProps>`
  overflow: hidden;
  ${space({ p: 2 })};
  ${color({ bg: '#e8e8e8' })}
`;

export const register = () => {
  const onSubmit = (
    values: RegisterValues,
    { setSubmitting }: FormikHelpers<RegisterValues>
  ) => {
    setTimeout(() => {
      // eslint-disable-next-line no-alert
      alert(
        `Registrierungs-Formular wurde abgeschickt mit den folgenden Werten:
            ${JSON.stringify(values, null, 2)}`
      );
      setSubmitting(false);
    }, 300);
  };

  const registerFormValidation = Yup.object().shape({
    email: Yup.string()
      .email('Bitte gib eine gültige E-Mail-Adresse an')
      .required('Bitte geben eine E-Mail-Adresse an'),
    lastName: Yup.string()
      .required('Bitte gib einen Nachnamen an')
      .min(3, 'Bitte gib mindestens drei Zeichen ein'),
    firstName: Yup.string()
      .required('Bitte gib einen Vornamen ein')
      .min(3, 'Bitte gib mindestens drei Zeichen ein'),
    password: Yup.string()
      .required('Bitte gib ein Passwort an')
      .min(8, 'Dein Passwort muss mindestens acht Zeichen lang sein'),
    passwordComfirm: Yup.string().oneOf(
      [Yup.ref('password')],
      'Die Passwörter stimmen nicht überein'
    )
  });

  return (
    <Grid justifyContent="center">
      <GridItem width={4 / 5}>
        <Formik
          initialValues={{
            email: '',
            lastName: '',
            firstName: '',
            password: '',
            passwordComfirm: ''
          }}
          validationSchema={registerFormValidation}
          isInitialValid={false}
          onSubmit={onSubmit}
          render={({
            values,
            touched,
            errors,
            handleSubmit,
            isValid,
            isSubmitting,
            handleReset
          }: FormikProps<RegisterValues>) => {
            return (
              <Card splitted>
                <CardSplitContent variant="secondary">
                  <>
                    <Heading styleAs="h4">Beispiel-Formular</Heading>
                    <Text>
                      Dies ist ein beispielhaftes Formular mit Feldern wie sie
                      bei einer Registrierung inkl. entsprechender Validierung
                      benötigt werden könnten
                    </Text>

                    <H5>Debug-Daten</H5>
                    <p>Values:</p>
                    <DebugValues>{JSON.stringify(values, null, 2)}</DebugValues>
                    <p>Errors:</p>
                    <DebugValues>{JSON.stringify(errors, null, 2)}</DebugValues>
                    <p>Touched:</p>
                    <DebugValues>
                      {JSON.stringify(touched, null, 2)}
                    </DebugValues>
                    <Button variant="secondary" onClick={handleReset}>
                      Formular zurücksetzen
                    </Button>
                  </>
                </CardSplitContent>

                <CardSplitContent>
                  <>
                    <Heading styleAs="h4">Registrierung</Heading>
                    <form onSubmit={handleSubmit}>
                      <FormInput type="text" name="firstName" label="Vorname" />
                      <FormInput type="text" name="lastName" label="Nachname" />
                      <FormInput type="text" name="email" label="E-Mail" />
                      <FormInput
                        type="password"
                        name="password"
                        label="Passwort"
                      />
                      <FormInput
                        type="password"
                        name="passwordConfirm"
                        label="Passwort wiederholen"
                      />
                      <Button type="submit" disabled={!isValid || isSubmitting}>
                        {isValid && !isSubmitting
                          ? 'Abschicken'
                          : 'Bitte alle Felder ausfüllen'}
                      </Button>
                    </form>
                  </>
                </CardSplitContent>
              </Card>
            );
          }}
        />
      </GridItem>
    </Grid>
  );
};

register.story = {
  name: 'Registrierung'
};

import React, {useRef} from 'react';
import {Alert, Button, ScrollView, StyleSheet, View} from 'react-native';
import ReactNativeForm, {defaultProps, FormContext} from 'rjsf-native';
import schema from './schema.json';

const uiSchema = {
  toggle: {
    'ui:widget': 'radio',
  },
  description: {
    'ui:widget': 'textarea',
  },
  password: {
    'ui:widget': 'password',
  },
  percentage: {
    'ui:widget': 'range',
  },
  multiselect: {
    'ui:widget': 'checkboxes',
  },
};

const FormPage = () => {
  const form = useRef<any>(null);
  return (
    <FormContext.Provider
      value={{
        ...defaultProps,
        // requiredTitle: '(必填)',
        // arrayAddTitle: '添加',
        // radioLabelMapping(input) {
        //   if (input.toLowerCase() === 'yes') {
        //     return '是';
        //   } else if (input.toLowerCase() === 'no') {
        //     return '否';
        //   } else {
        //     return input;
        //   }
        // },
      }}>
      <ScrollView style={styles.container}>
        <View style={styles.spacer} />
        <ReactNativeForm
          ref={form}
          onError={e => {
            console.log(e);
            Alert.alert('Please check your form');
          }}
          schema={schema as any}
          uiSchema={uiSchema}
          onSubmit={f => console.log(f.formData)}>
          <Button
            title="Submit"
            onPress={() => {
              if (form.current) {
                form.current.submit();
              }
            }}
          />
        </ReactNativeForm>
        <View style={styles.spacer} />
      </ScrollView>
    </FormContext.Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  spacer: {
    height: 100,
  },
});

export default FormPage;

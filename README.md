### [react-json-schema-form](https://github.com/rjsf-team/react-jsonschema-form) themed for react-native

```bash
yarn add rjsf-native
# This package also depends on `@react-native-community/slider`
yarn add @react-native-community/slider
# and link and pod install since it's a native library
```

```typescript
import ReactNativeForm from 'rjsf-native';

const App = () => {
  const form = useRef(null);
  return (
    <ReactNativeForm
      ref={form}
      onError={e => {
        console.log(e);
        Alert.alert('Please check your form');
      }}
      schema={schema}
      uiSchema={uiSchema}
      onSubmit={form => console.log(form.formData)}>
      <Button
        title="Submit"
        onPress={() => {
          form.current?.submit();
        }}
      />
    </ReactNativeForm>
  );
};
```

We also provide a Context as a form of overriding defaults

```typescript
import ReactNativeForm, {defaultProps, FormContext} from 'rjsf-native';

const App = () => {
  const form = useRef(null)
  return (
    <FormContext value={{...defaultProps, requiredTitle: '*'}}>
        <ReactNativeForm .../>
    </FormContext>
  )
}
```

![](./docs/Simulator%20Screen%20Shot%20-%20iPhone%2011%20-%202020-01-03%20at%2011.45.00.png)
![](./docs/Simulator%20Screen%20Shot%20-%20iPhone%2011%20-%202020-01-03%20at%2011.45.04.png)

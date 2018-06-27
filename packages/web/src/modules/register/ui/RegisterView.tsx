import { Button, Checkbox, Form, Icon } from 'antd';
import * as React from 'react';
import { withFormik, FormikErrors, FormikProps, Field, Form as FForm } from 'formik';
import { validUserSchema } from '@abb/common';
import { InputField } from '../../shared/InputField';


const FormItem = Form.Item;

interface FormValues {
  email: string;
  password: string;
}

interface Props {
  submit: (values: FormValues) => Promise<FormikErrors<FormValues> | null>;
}

export class C extends React.PureComponent<FormikProps<FormValues> & Props> {
  render() {
    return (
      <FForm style={{ display: 'flex' }} >
        <div style={{ width: 400, margin: 'auto' }}>
          <Field
            name="email"
            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} /> as any}
            placeholder="Email"
            component={InputField}
          />
          <Field
            name="password"
            type="password"
            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} /> as any}
            placeholder="Password"
            component={InputField}
          />
          <FormItem>
            <Checkbox>Remember me</Checkbox>,
            <a className="login-form-forgot" href="">
              Forgot password
            </a>
          </FormItem>
          <FormItem>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Register
            </Button>
          </FormItem>
          <FormItem>
            Or <a href="">log in now!</a>
          </FormItem>
        </div>
      </FForm>
    );
  }
}

export const RegisterView = withFormik<Props, FormValues>({
  validationSchema: validUserSchema,
  // validateOnChange: false,
  // validateOnBlur: false,
  mapPropsToValues: () => ({ email: '', password: '' }),
  handleSubmit: async (values, { props, setErrors, setSubmitting }) => {
    const errors = await props.submit(values);
    if (errors) {
      setErrors(errors);
    }
  }
})(C);

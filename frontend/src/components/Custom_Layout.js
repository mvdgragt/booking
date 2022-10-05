import { AppointmentForm } from "@devexpress/dx-react-scheduler-material-ui";

const Layout = (props) => {
  const { commandLayoutComponent } = props;
  return (
    <AppointmentForm.Layout
      {...props}
      commandLayoutComponent={() => {
        return null;
      }}
    >
      {commandLayoutComponent()}
    </AppointmentForm.Layout>
  );
};

export default Layout
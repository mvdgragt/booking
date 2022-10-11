import './App.css';
import Calendar from './components/Calendar';

// import { useMsalAuthentication } from '@azure/msal-react';

// function App(): JSX.Element {
//   useMsalAuthentication(InteractionType.Redirect);

function App() {
  return (
     <div className="App">
      <Calendar />
      </div>
  );

//   return (
//     <PageLayout>
//         <AuthenticatedTemplate>
//             <RootComponent />
//         </AuthenticatedTemplate>
//         <div className="App">
//       <Calendar />
//       </div>

//         <UnauthenticatedTemplate>
//             <p>You are not signed in! Please sign in.</p>
//         </UnauthenticatedTemplate>
//     </PageLayout>
// );

}

export default App;

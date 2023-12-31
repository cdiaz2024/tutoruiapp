

// App.js
import React, { Component } from 'react';
import './App.css';
import { Button, ThemeProvider, withAuthenticator } from '@aws-amplify/ui-react';
import { NavBar, TutoringEventCreateForm, TutoringEventUpdateForm, DispTutorEventCollection,EditTutoringEvent} from "./ui-components";
import { createTutoringEvent } from './graphql/mutations';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { generateClient } from "aws-amplify/api";
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import EventEdit from './EventEdit';
import { getTutoringEvent } from './graphql/queries';



function MyFormComponent() {
  const navigate = useNavigate();
  
  const handleSubmit = async (fields) => {
    const updatedFields = {};
    Object.keys(fields).forEach((key) => {
      if (typeof fields[key] === 'string') {
        updatedFields[key] = fields[key].trim();
      } else {
        updatedFields[key] = fields[key];
      }
    });
  
    try {
      const newTutoringEvent = await client.graphql({
        query: createTutoringEvent,
        variables: {
          input: {
            "studentName": updatedFields.studentName,
            "date": updatedFields.date,
            "conceptsCovered": updatedFields.conceptsCovered
          }
        }
      });
  
      // Additional logic or API calls if needed
  
      // Use navigate to go to a different page (replace '/target-page' with your desired path)
      navigate('/');
    } catch (error) {
      // Handle errors, log them, or show an error message to the user
      console.error('Error creating tutoring event:', error);
    }
  };
  

  const handleCancel = () => {
    navigate('/');
  }
  return (
    <div>
      {/* Other components or content */}
      <TutoringEventCreateForm onSubmit={handleSubmit} onCancel={handleCancel}/>
    </div>
  );
}


// App.js (continuation)


// function MyUpdateComponent() {
//   const navigate = useNavigate();
//   const { id } = useParams(); // Use useParams hook to get the ID from the URL

//   return (
//     <div>
//       {/* Other components or content */}
//       <TutoringEventUpdateForm
//         onSubmit={(fields) => {
//           // Example function to trim all string inputs
//           const updatedFields = {};
//           Object.keys(fields).forEach((key) => {
//             if (typeof fields[key] === 'string') {
//               updatedFields[key] = fields[key].trim();
//             } else {
//               updatedFields[key] = fields[key];
//             }
//           });

//           // Use the ID as needed
//           console.log('ID:', id);

//           // Additional logic or API calls if needed

//           // Use navigate to go to a different page (replace '/' with your desired path)
//           navigate('/');
//         }}
//         onCancel={() => navigate('/')}
//       />
//     </div>
//   );
// }

// ... (the rest of your code)




const client = generateClient()

class App extends Component {
  handleSignOut = () => {}
  render() {
    return (
      <div className="App"><header className='App-header'>
        <Router>
          <Routes>
          <Route exact path = '/' element={<div><NavBar/><DispTutorEventCollection/>
          </div>} />
          <Route exact path='/new' element={<div><NavBar/><MyFormComponent/>
          </div>} />
          <Route
                exact path="/update/:cid" // Define a parameter ":id"
                element={<EventEdit/>}
              />
          </Routes>
        </Router>
        
      </header>

      </div>
    );
  }
}

export default withAuthenticator(App)
**Big Tavo's Pizza Ordering App**

Welcome to Big Tavo's Pizza Ordering App, a React-based web application that provides users with a seamless interface to customize and order their favorite pizza!

**Features**:

1. **Landing Page**:
   - Landing page with a central image representing "Big Tavo".
   - A prominent call-to-action link navigates the user to the pizza ordering form.

2. **Ordering Form**:
   - Intuitive form layout where customers can:
     - Input their name (with validation ensuring it's at least two characters long).
     - Provide an address and phone number.
     - Select a pizza size from a dropdown.
     - Choose toppings with checkboxes (like cheese, pepperoni, sausage, chicken, and ham).
     - Provide special instructions in a text input.
   - Real-time feedback for the name validation.
   - The form data gets submitted to an external API, providing users with feedback upon successful order or any errors.
   
3. **Styling**:
   - The application boasts a modern and clean design.
   - The main landing page uses a soothing gradient as a background, enhancing user experience.
   - The pizza form is styled for usability, with responsive input fields and visually appealing buttons.

4. **Routing**:
   - Implemented using `react-router-dom` for seamless navigation between the landing page and the pizza ordering form.

5. **Firebase Integration**:
   - The app is set up with Firebase, suggesting potential for cloud-based functionalities like authentication, real-time database, or hosting.

**Tech Stack**:
- **React**: For building the UI components.
- **Yup**: For form validation.
- **Axios**: For making HTTP requests.
- **Firebase**: For potential backend services.
- **SCSS**: For styling and design.

---

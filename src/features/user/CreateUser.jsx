import { useState } from 'react';
import Button from '../../ui/Button';
import { useDispatch } from 'react-redux';
import { updateName } from './userSlice';
import { useNavigate } from 'react-router-dom';

function CreateUser() {
  const [username, setUsername] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    if (!username) return;
    dispatch(updateName(username));
    navigate('/menu');
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex justify-center sm:gap-1 md:gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#B89230"
        >
          <path d="m448-524 244-244q10.91-11 25.45-11Q732-779 743-768.07t11 25.5Q754-728 743-717L499-473l-51-51Zm85 85 210-210q10.67-11 25.33-11Q783-660 794-649q11 11 11 25.67 0 14.66-11 25.33L584-388l-51-51ZM201-224q-81-81-82-195t80-195l113-113 53 54q8 8 15 17t9 21l150-150q10.67-11 25.33-11Q579-796 590-785q11 11 11 25.67 0 14.66-11 25.33L408-552l-45 46 9 9q39 39 38.5 93T371-311l-25 25-51-51 25-25q17-17 17.5-42t-16.59-42.33L286-481q-11-10.67-11-25.33Q275-521 286-532l26-25q14-14.4 14-34.2 0-19.8-14-33.8l-63 62q-60 60-58.5 144.5T252-274q60 60 143.22 60 83.21 0 142.78-60l222.81-222.86Q772-508 786.67-508q14.66 0 25.33 11 11 10.67 11 25.33 0 14.67-11.14 25.81L589-224q-80.51 81-193.76 81Q282-143 201-224Zm194-193ZM672-48v-72q70 0 119-49t49-119h72q0 99.59-70.21 169.79Q771.59-48 672-48ZM48-672q0-99.59 70.21-169.79Q188.41-912 288-912v72q-70 0-119 49t-49 119H48Z" />
        </svg>
        <p className="mb-4 text-sm text-stone-600 md:text-base">
          Welcome! Please start by telling us your name
        </p>
      </div>

      <input
        type="text"
        placeholder="Your full name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="input mb-8 w-72"
      />

      {username.length > 1 && (
        <div>
          <Button type="primary">Start ordering</Button>
        </div>
      )}
    </form>
  );
}

export default CreateUser;
Requirements
Your task is to implement a time tracker for tasks, using React and Redux.

The time tracker should consist of two components connected to redux:

Component for adding new tasks (TaskCreator)
Elements:

Input field for task name – with ID taskName
Input field for time elapsed (in seconds) – with ID timeField
Start button – with ID start
Stop button – with ID stop
Behaviour:

When user clicks start, the timer should start counting seconds elapsed.
timeField should display seconds elapsed.
When user clicks stop, the elapsed time, task name and ID should be saved to the redux store, and timeField should reset to 0:
Task ID should auto-increment starting from 1;
Saving to redux should be skipped if the elapsed time is equal to 0.
When user focuses timeField the timer should pause.
User should be able to change the elapsed time by typing into timeField.
When user blurs timeField, the timer should resume.
The component must be exported as default from TaskCreator.js (the name of the component doesn't matter).

Component for displaying tasks (TasksList)
Elements:

List of tracked tasks from redux store – with ID tasks:

Each entry should be in the following format (remember about the class, as it is vital for the tests to pass):

<li class="task">
    <span class="id">Task ID</span>
    <span class="name">Task Name</span>
    <span class="time">Task Elapsed Time (number only)</span>
</li>
Total tracked time (number only) – with ID total.

Behaviour:

The list should display tasks with the same name as if they were a single task:
time should be a sum of their times;
ID should be the lowest ID of all matching tasks.
The list should be sorted in descending order of task ID.
The component must be exported as default from TasksList.js (the name of the component doesn't matter).

Assumptions
An empty taskName field should be treated as a task with an empty string as its name, and therefore it shouldn't throw any errors.
You can assume the user types only digits into timeField.
The look of the components won't be evaluated; only their functionalities will be tested.
In reducer.js, you must export default reducer function and export const initialState – your initial Redux state.
Available tools/packages
Use browser console for debugging

You are expected to use:

React 16.13.1
React-Redux 7.2.1
Redux 4.0.5
You may use

Redux Toolkit 1.4.0

Examples
Tasks in store
ID name time
1 My Task 4
2 my task 5
3 My Task 12
4 Another Task 3
Displayed tasks
ID name time
1 My Task 16
2 my task 5
4 Another Task 3
Total tracked time 24

import { useContext } from 'react';
import { Container } from '../../components/Container';
import { Countdown } from '../../components/Countdown';
import { MainForm } from '../../components/MainForm';
import { TaskContext } from '../../contexts/TaskContext/taskContext';
import { MainTemplate } from '../../templates/MainTemplate';

export function Home() {
  const TaskContextHome = useContext(TaskContext);

  console.log(TaskContextHome);

  return (
    <>
      <MainTemplate>
        <Container>
          <Countdown />
        </Container>
        <Container>
          <MainForm />
        </Container>
      </MainTemplate>
    </>
  );
}

import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonLabel, IonButton, IonPopover, IonBadge, IonFab, IonFabButton, IonIcon, useIonViewWillEnter } from '@ionic/react';
import React, { useState } from 'react';
import { add } from 'ionicons/icons';
import { RouteComponentProps } from 'react-router';

interface Task {
  name: String;
  urgence: Number;
  status: String;
  _id: String;
  Created_date: Date;

}



const Home: React.FC<RouteComponentProps> = (props) => {
  const [tasks, setTask] = useState<Task[]>([]);

  useIonViewWillEnter(async () => {
    const result = await fetch('http://localhost:3000/tasks', {
    });
    const data = await result.json();
    setTask(data);
    console.log(data);
  });

  return (
    <IonPage>

      <IonHeader>
        <IonToolbar>
          <IonTitle>Listando suas tarefas</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>

        <IonList >
          {tasks.map((task, idx) => <TaskItem key={idx} task={task} />)}
        </IonList>

      </IonContent>

      <IonFab vertical="bottom" horizontal="end" slot="fixed">
        <IonFabButton onClick={() => props.history.push('/newTask')}>
          <IonIcon icon={add} />
        </IonFabButton>
      </IonFab>

    </IonPage>
  );
};

const TaskItem: React.FC<{ task: Task }> = ({ task }) => {
  const [showPopover, setShowPopover] = useState(false);
  return (


    <IonItem onClick={() => setShowPopover(true)} lines="full" detail={true}>

      <IonPopover
        isOpen={showPopover}
        onDidDismiss={e => setShowPopover(false)}
        keyboardClose={true}
      >
        <p>ID: {task._id}</p>
        <p>Data de criação: {task.Created_date} </p>
        <p>Tarefa: {task.name}</p>
        <p>Status: {task.status}</p>
        <p>Prioridade: {task.urgence}</p>
        <IonButton size="small" >Editar</IonButton>
        <IonButton size="small" color="danger">Deletar</IonButton>
        <IonButton size="small" color="secondary" onClick={e => setShowPopover(false)}>Sair</IonButton>


      </IonPopover>

      <IonLabel>
        {task.name}
      </IonLabel>
      <IonBadge color="secondary" slot="start">
        {task.urgence}
      </IonBadge>

    </IonItem >
  );
}



export default Home;

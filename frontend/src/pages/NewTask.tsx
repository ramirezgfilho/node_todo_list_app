import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonBackButton } from '@ionic/react';
import React from 'react';
import {  } from 'ionicons/icons';


const NewTask: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/home"></IonBackButton>

          </IonButtons>
          <IonTitle>Crie uma tarefa</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>




      </IonContent>
    </IonPage>
  );
};

export default NewTask;

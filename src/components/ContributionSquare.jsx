import React from 'react';
import './ContributionSquare.css'; // Importer le fichier CSS pour styliser les cases

const ContributionSquare = ({ activityLevel }) => {
  let colorClass;

  // Déterminer la couleur en fonction du niveau d'activité
  if (activityLevel === 0) {
    colorClass = 'light-gray'; // Gris clair pour aucune activité
  } else if (activityLevel <= 2) {
    colorClass = 'medium-gray'; // Gris moyen pour une activité modérée
  } else {
    colorClass = 'dark-gray'; // Gris foncé pour une activité élevée
  }

  return <div className={`contribution-square ${colorClass}`} />;
};

export default ContributionSquare;

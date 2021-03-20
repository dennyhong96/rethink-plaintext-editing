import { useState } from 'react';

const useIsEditing = () => {
  const [isEditing, setIsEditing] = useState(false);

  return {
    isEditing,
    toggleEditing() {
      setIsEditing(prev => !prev);
    }
  };
};

export default useIsEditing;

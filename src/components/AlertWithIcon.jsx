'use client';

import { Alert } from 'flowbite-react';
import { HiInformationCircle } from 'react-icons/hi';

export default function AlertWithIcon() {
  return (
    <Alert
      color="success"
      icon={HiInformationCircle}
      
    >
      <span>
        <p>
          {/* <span className="font-medium">
            Info alert!
          </span> */}
          Item has been added!
        </p>
      </span>
    </Alert>
  )
}


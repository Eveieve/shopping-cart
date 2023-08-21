'use client';

import { Alert } from 'flowbite-react';
import { HiInformationCircle } from 'react-icons/hi';

export default function AlertWithIcon() {

  return (
    <span className = "animate-[ping_1.5s_ease-in-out]">
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
    </span>
  )
}


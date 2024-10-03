import EventForm from '@/components/forms/EventForm'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import React from 'react'

function NewEventPage() {
  return (
    <Card>
        <CardHeader>
            <CardTitle>New Event</CardTitle>
        </CardHeader>

        <CardContent>
            <EventForm/>
        </CardContent>
    </Card>
  )
}

export default NewEventPage
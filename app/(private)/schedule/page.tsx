import { ScheduleForm } from '@/components/forms/ScheduleForm'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { db } from '@/drizzle/db'
import { auth } from '@clerk/nextjs/server'
import React from 'react'

async function SchedulePage() {
    const { userId, redirectToSignIn } = auth()
    if (userId == null) return redirectToSignIn()

    const schedule = await db.query.ScheduleTable.findFirst({
        where: ({ clerkUserId }, { eq }) => eq(clerkUserId, userId),
        with: {
            availabilities: true
        }
    })

    return (
        <Card>
            <CardHeader>
                <CardTitle>Schedule</CardTitle>
            </CardHeader>

            <CardContent>
                <ScheduleForm schedule={schedule} />
            </CardContent>
        </Card>
    )
}

export default SchedulePage
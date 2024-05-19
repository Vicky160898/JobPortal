import Link from 'next/link'
import React from 'react'

function JobList() {
  return (
    <div>
      job list component <Link href={`/joblist/5`}>Click here</Link>
    </div>
  )
}

export default JobList

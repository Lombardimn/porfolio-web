export const formatDate = (dateIso: Date) => {
  const date = new Date(dateIso)

  const options: Intl.DateTimeFormatOptions = {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
    timeZone: 'America/Argentina/Buenos_Aires'
  }

  const formatter = new Intl.DateTimeFormat('es-AR', options)
  const formattedDate = formatter.format(date)

  return formattedDate.replace(',', ',')
}
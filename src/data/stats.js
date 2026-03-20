import { Users, Calendar } from 'lucide-react';
import { events } from './events';

export const stats = [
    { id: 1, label: 'Members', value: '180+', icon: Users, color: 'blue' },
    { id: 2, label: 'Events', value: events.length.toString(), icon: Calendar, color: 'green' },
];

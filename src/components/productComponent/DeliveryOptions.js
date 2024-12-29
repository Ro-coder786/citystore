const deliveryOptions = [
    { id: 'delivery-usa', name: 'USA', description: 'Delivery only For USA' },
    { id: 'delivery-europe', name: 'Europe', description: 'Delivery only For Europe' },
    { id: 'delivery-asia', name: 'Asia', description: 'Delivery only For Asia' },
    { id: 'delivery-australia', name: 'Australia', description: 'Delivery only For Australia' },
];

export default function DeliveryOptions() {
    return (
        <ul className="grid grid-cols-2 gap-4">
            {deliveryOptions.map((option) => (
                <li key={option.id}>
                    <input                        
                        type="radio"
                        id={option.id}
                        name="delivery"
                        value={option.id}
                        className="peer hidden"
                        readOnly
                    />
                    <label
                        htmlFor={option.id}
                        className="inline-flex w-full cursor-pointer items-center justify-between rounded-lg border border-gray-200 bg-white p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-600 peer-checked:border-primary-600 peer-checked:text-primary-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:peer-checked:text-primary-500 md:p-5"
                    >
                        <div className="block">
                            <div className="w-full text-lg font-semibold">{option.name}</div>
                            <div className="w-full">{option.description}</div>
                        </div>
                    </label>
                </li>
            ))}
        </ul>
    );
}

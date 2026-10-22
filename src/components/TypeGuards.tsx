interface Customer {
  type: 'customer';
  email: string;
}

interface Admin {
  type: 'admin';
  role: string;
  permissions: string[];
}

function isAdmin(person: Customer | Admin): person is Admin {
  return person.type === 'admin';
}

function checkAccess(person: Customer | Admin): string {
  if (isAdmin(person)) {
    return `Администратор. Права: ${person.permissions.join(', ')}`;
  } else {
    return `Клиент. Email: ${person.email}`;
  }
}

export const TypeGuards = () => {
  const customerUser: Customer = { type: 'customer', email: 'test@mail.com' };
  const adminUser: Admin = { type: 'admin', role: 'SuperAdmin', permissions: ['create', 'delete'] };

  return (
    <div style={{ padding: '15px', border: '1px solid #ccc', marginBottom: '10px' }}>
      <h3>Задание 3: Type Guards</h3>
      <p>{checkAccess(customerUser)}</p>
      <p>{checkAccess(adminUser)}</p>
    </div>
  );
};
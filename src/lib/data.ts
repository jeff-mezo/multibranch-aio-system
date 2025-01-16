export let role = "admin";

export const itemData = [
  {
    itemId: "uuid1",
    name: "Laptop Pro",
    price: 1500.0,
    quantity: 10,
    laptop: {
      laptopId: "uuid1",
      serialNumber: "SN12345",
      itemId: "uuid1",
      modelName: "Pro 2023",
      processor: "i3",
      memory: "4GB",
      storage: "512GB SSD",
      battLife: "10 hours",
    },
  },
  {
    itemId: "uuid2",
    name: "Laptop Pro",
    price: 1500.0,
    quantity: 10,
    laptop: {
      laptopId: "uuid2",
      serialNumber: "SN12345",
      itemId: "uuid1",
      modelName: "Pro 2025",
      processor: "i7",
      memory: "16GB",
      storage: "512GB SSD",
      battLife: "10 hours",
    },
  },
  {
    itemId: "uuid3",
    name: "Laptop Pro",
    price: 1500.0,
    quantity: 10,
    laptop: {
      laptopId: "uuid3",
      serialNumber: "SN12345",
      itemId: "uuid1",
      modelName: "Pro 2025",
      processor: "i7",
      memory: "16GB",
      storage: "512GB SSD",
      battLife: "10 hours",
    },
  },
];

export const userData = [
  {
    userId: "uuid1",
    username: "adminuser",
    name: "Jeuss Ugly",
    email: "admin@example.com",
    password: "hashed_password",
    role: "ADMIN",
    createdAt: "2025-01-10T10:00:00Z",
  },
  {
    userId: "uuid2",
    username: "staffuser",
    name: "Staff User",
    email: "staff@example.com",
    password: "hashed_password",
    role: "STAFF",
    createdAt: "2025-01-10T11:00:00Z",
    staff: {
      staffId: "uuid3",
      branchId: "uuid1",
      staffName: "John Doe",
      birthday: "1990-05-20",
      address: "789 Elm St",
      title: "Manager",
      hireDate: "2025-01-15T10:00:00Z",
      userId: "uuid2",
    },
  },
];

export const purchaseData = [
  {
    invoiceId: "uuid1",
    invoiceNumber: "INV12345",
    customerName: "Alice",
    staffId: "uuid3",
    issueDate: "2025-01-15T10:00:00Z",
    totalAmount: 1500.0,
    branchId: "uuid1",
    purchase: [
      {
        purchaseDetailId: "uuid1",
        invoiceId: "uuid1",
        itemId: "uuid1",
        price: 1500.0,
        quantity: 1,
      },
      {
        purchaseDetailId: "uuid2",
        invoiceId: "uuid1",
        itemId: "uuid2",
        price: 2500.0,
        quantity: 1,
      },
      {
        purchaseDetailId: "uuid3",
        invoiceId: "uuid1",
        itemId: "uuid3",
        price: 3500.0,
        quantity: 1,
      },
    ],
  },
];

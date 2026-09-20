import {
  PieChart,
  Pie,
  Cell,
  Legend,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";

import "./Reports.css";

const Reports = ({ expenses }) => {
  // ==========================================
  // 1. Calculate total expenses per category
  // ==========================================

  const categoryTotals = expenses.reduce((acc, expense) => {
    acc[expense.category] = (acc[expense.category] || 0) + expense.amount;

    return acc;
  }, {});

  // ==========================================
  // 2. Calculate total expenses
  // ==========================================

  const totalExpenses = expenses.reduce(
    (sum, expense) => sum + expense.amount,
    0,
  );

  // ==========================================
  // 3. Prepare data for Pie Chart
  // ==========================================

  const pieData = Object.keys(categoryTotals).map((category) => ({
    name: category,
    value: categoryTotals[category],
  }));

  // ==========================================
  // 4. Pie Chart Label
  // ==========================================

  const renderLabel = (entry) => {
    if (totalExpenses === 0) {
      return "";
    }

    return `${entry.name}: ${((entry.value / totalExpenses) * 100).toFixed(
      1,
    )}%`;
  };

  // ==========================================
  // 5. Calculate total expenses per month
  // ==========================================

  const monthlyTotals = expenses.reduce((acc, expense) => {
    const month = new Date(expense.date).toLocaleString("default", {
      month: "short",
    });

    acc[month] = (acc[month] || 0) + expense.amount;

    return acc;
  }, {});

  // ==========================================
  // 6. Calculate total expenses per month + year
  // ==========================================

  const monthlyYearTotals = expenses.reduce((acc, expense) => {
    const date = new Date(expense.date);

    const month = date.toLocaleString("default", {
      month: "short",
    });

    const year = date.getFullYear();

    const monthYear = `${month} ${year}`;

    acc[monthYear] = (acc[monthYear] || 0) + expense.amount;

    return acc;
  }, {});

  // ==========================================
  // 7. Month order
  // ==========================================

  const monthOrder = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  // ==========================================
  // 8. Prepare Bar Chart Data
  // ==========================================

  const barData = Object.keys(monthlyTotals)
    .map((month) => ({
      name: month,
      value: monthlyTotals[month],
    }))
    .sort((a, b) => {
      return monthOrder.indexOf(a.name) - monthOrder.indexOf(b.name);
    });

  // ==========================================
  // 9. Prepare Line Chart Data
  // ==========================================

  const lineData = Object.keys(monthlyYearTotals)
    .map((monthYear) => ({
      name: monthYear,
      value: monthlyYearTotals[monthYear],
    }))
    .sort((a, b) => {
      const [monthA, yearA] = a.name.split(" ");
      const [monthB, yearB] = b.name.split(" ");

      return (
        yearA - yearB || monthOrder.indexOf(monthA) - monthOrder.indexOf(monthB)
      );
    });

  // ==========================================
  // 10. Pie Chart Colors
  // ==========================================

  const COLORS = ["#0088FE", "#00C49F", "#FF8042", "#FFBB28"];

  // ==========================================
  // 11. JSX
  // ==========================================

  return (
    <div className="reports-container">
      <h1>Reports</h1>

      {/* No Expenses */}
      {expenses.length === 0 ? (
        <p>No expenses to display. Please add some expenses.</p>
      ) : (
        <div className="charts-section">
          {/* ==================================
              PIE CHART
          ================================== */}

          <div className="chart-card">
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={pieData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={60}
                  label={renderLabel}
                  labelLine={false}
                >
                  {pieData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>

                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* ==================================
              BAR CHART
          ================================== */}

          <div className="chart-card">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={barData}>
                {/* Gradient */}
                <defs>
                  <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />

                    <stop offset="95%" stopColor="#82ca9d" stopOpacity={0.8} />
                  </linearGradient>
                </defs>

                {/* X Axis */}
                <XAxis dataKey="name" />

                {/* Y Axis */}
                <YAxis
                  label={{
                    value: "Expense Amount",
                    angle: -90,
                    position: "insideLeft",
                  }}
                />

                {/* Bar */}
                <Bar dataKey="value" fill="url(#barGradient)" />

                {/* Tooltip */}
                <Tooltip formatter={(value) => `₹${value.toLocaleString()}`} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* ==================================
              LINE CHART
          ================================== */}

          <div className="chart-card">
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={lineData}>
                {/* X Axis */}
                <XAxis dataKey="name" />

                {/* Y Axis */}
                <YAxis
                  label={{
                    value: "Expense Amount",
                    angle: -90,
                    position: "insideLeft",
                  }}
                  tickFormatter={(value) => `₹${value.toLocaleString()}`}
                />

                {/* Tooltip */}
                <Tooltip formatter={(value) => `₹${value.toLocaleString()}`} />

                {/* Line */}
                <Line
                  type="monotone"
                  dataKey="value"
                  strokeWidth={2}
                  stroke="#8884d8"
                  dot={{ r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}
    </div>
  );
};

export default Reports;

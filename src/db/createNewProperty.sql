INSERT INTO properties (
    property_name,
    description,
    address,
    city,
    state,
    zip,
    url,
    mg_total,
    mg_monthly,
    desired_rent,
    user_id
)

VALUES (
    ${property_name},
    ${description},
    ${address},
    ${city},
    ${state},
    ${zip},
    ${url},
    ${mg_total},
    ${mg_monthly},
    ${desired_rent},
    ${user_id}
)